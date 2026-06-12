import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cht")
export default class ChtController {
  @operation({
    summary: "Get Cht",
  })
  @get()
  static getCht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cht",
  })
  @post("{id}")
  static createCht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
