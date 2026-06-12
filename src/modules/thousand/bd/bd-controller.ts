import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bd")
export default class BdController {
  @operation({
    summary: "Get Bd",
  })
  @get()
  static getBd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bd",
  })
  @post("{id}")
  static createBd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
