import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bho")
export default class BhoController {
  @operation({
    summary: "Get Bho",
  })
  @get()
  static getBho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bho",
  })
  @post("{id}")
  static createBho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
