import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eae")
export default class EaeController {
  @operation({
    summary: "Get Eae",
  })
  @get()
  static getEae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eae",
  })
  @post("{id}")
  static createEae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
