import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gak")
export default class GakController {
  @operation({
    summary: "Get Gak",
  })
  @get()
  static getGak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gak",
  })
  @post("{id}")
  static createGak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
