import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgq")
export default class KgqController {
  @operation({
    summary: "Get Kgq",
  })
  @get()
  static getKgq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgq",
  })
  @post("{id}")
  static createKgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
