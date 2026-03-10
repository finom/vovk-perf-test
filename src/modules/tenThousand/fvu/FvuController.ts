import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvu")
export default class FvuController {
  @operation({
    summary: "Get Fvu",
  })
  @get()
  static getFvu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvu",
  })
  @post("{id}")
  static createFvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
