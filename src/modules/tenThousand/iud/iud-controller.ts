import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iud")
export default class IudController {
  @operation({
    summary: "Get Iud",
  })
  @get()
  static getIud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iud",
  })
  @post("{id}")
  static createIud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
