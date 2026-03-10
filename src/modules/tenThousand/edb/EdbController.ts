import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edb")
export default class EdbController {
  @operation({
    summary: "Get Edb",
  })
  @get()
  static getEdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edb",
  })
  @post("{id}")
  static createEdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
