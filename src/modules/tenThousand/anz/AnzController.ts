import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anz")
export default class AnzController {
  @operation({
    summary: "Get Anz",
  })
  @get()
  static getAnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anz",
  })
  @post("{id}")
  static createAnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
