import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fev")
export default class FevController {
  @operation({
    summary: "Get Fev",
  })
  @get()
  static getFev = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fev",
  })
  @post("{id}")
  static createFev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
