import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffo")
export default class FfoController {
  @operation({
    summary: "Get Ffo",
  })
  @get()
  static getFfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffo",
  })
  @post("{id}")
  static createFfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
