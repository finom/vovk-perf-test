import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aak")
export default class AakController {
  @operation({
    summary: "Get Aak",
  })
  @get()
  static getAak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aak",
  })
  @post("{id}")
  static createAak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
