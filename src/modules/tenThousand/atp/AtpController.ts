import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atp")
export default class AtpController {
  @operation({
    summary: "Get Atp",
  })
  @get()
  static getAtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atp",
  })
  @post("{id}")
  static createAtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
