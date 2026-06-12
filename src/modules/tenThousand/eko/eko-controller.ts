import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eko")
export default class EkoController {
  @operation({
    summary: "Get Eko",
  })
  @get()
  static getEko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eko",
  })
  @post("{id}")
  static createEko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
