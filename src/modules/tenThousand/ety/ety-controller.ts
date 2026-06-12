import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ety")
export default class EtyController {
  @operation({
    summary: "Get Ety",
  })
  @get()
  static getEty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ety",
  })
  @post("{id}")
  static createEty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
