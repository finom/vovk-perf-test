import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icu")
export default class IcuController {
  @operation({
    summary: "Get Icu",
  })
  @get()
  static getIcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icu",
  })
  @post("{id}")
  static createIcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
