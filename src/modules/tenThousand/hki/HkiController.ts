import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hki")
export default class HkiController {
  @operation({
    summary: "Get Hki",
  })
  @get()
  static getHki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hki",
  })
  @post("{id}")
  static createHki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
