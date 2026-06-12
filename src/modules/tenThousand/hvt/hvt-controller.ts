import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvt")
export default class HvtController {
  @operation({
    summary: "Get Hvt",
  })
  @get()
  static getHvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvt",
  })
  @post("{id}")
  static createHvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
