import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elu")
export default class EluController {
  @operation({
    summary: "Get Elu",
  })
  @get()
  static getElu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elu",
  })
  @post("{id}")
  static createElu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
