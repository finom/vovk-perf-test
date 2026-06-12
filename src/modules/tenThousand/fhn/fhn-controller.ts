import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhn")
export default class FhnController {
  @operation({
    summary: "Get Fhn",
  })
  @get()
  static getFhn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhn",
  })
  @post("{id}")
  static createFhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
