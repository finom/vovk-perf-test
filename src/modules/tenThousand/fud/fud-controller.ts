import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fud")
export default class FudController {
  @operation({
    summary: "Get Fud",
  })
  @get()
  static getFud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fud",
  })
  @post("{id}")
  static createFud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
