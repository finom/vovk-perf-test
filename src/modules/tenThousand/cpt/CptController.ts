import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpt")
export default class CptController {
  @operation({
    summary: "Get Cpt",
  })
  @get()
  static getCpt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpt",
  })
  @post("{id}")
  static createCpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
