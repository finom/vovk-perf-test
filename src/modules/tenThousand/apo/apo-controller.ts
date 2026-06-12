import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apo")
export default class ApoController {
  @operation({
    summary: "Get Apo",
  })
  @get()
  static getApo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apo",
  })
  @post("{id}")
  static createApo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
