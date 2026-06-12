import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eec")
export default class EecController {
  @operation({
    summary: "Get Eec",
  })
  @get()
  static getEec = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eec",
  })
  @post("{id}")
  static createEec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
