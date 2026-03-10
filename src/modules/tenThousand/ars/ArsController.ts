import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ars")
export default class ArsController {
  @operation({
    summary: "Get Ars",
  })
  @get()
  static getArs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ars",
  })
  @post("{id}")
  static createArs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
