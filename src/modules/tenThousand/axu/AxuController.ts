import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axu")
export default class AxuController {
  @operation({
    summary: "Get Axu",
  })
  @get()
  static getAxu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axu",
  })
  @post("{id}")
  static createAxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
