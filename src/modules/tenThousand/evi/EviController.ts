import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evi")
export default class EviController {
  @operation({
    summary: "Get Evi",
  })
  @get()
  static getEvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evi",
  })
  @post("{id}")
  static createEvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
