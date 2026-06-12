import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foq")
export default class FoqController {
  @operation({
    summary: "Get Foq",
  })
  @get()
  static getFoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Foq",
  })
  @post("{id}")
  static createFoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
