import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdo")
export default class BdoController {
  @operation({
    summary: "Get Bdo",
  })
  @get()
  static getBdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdo",
  })
  @post("{id}")
  static createBdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
