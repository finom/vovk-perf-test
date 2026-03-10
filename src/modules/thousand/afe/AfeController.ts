import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afe")
export default class AfeController {
  @operation({
    summary: "Get Afe",
  })
  @get()
  static getAfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afe",
  })
  @post("{id}")
  static createAfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
