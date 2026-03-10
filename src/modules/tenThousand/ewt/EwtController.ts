import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewt")
export default class EwtController {
  @operation({
    summary: "Get Ewt",
  })
  @get()
  static getEwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewt",
  })
  @post("{id}")
  static createEwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
