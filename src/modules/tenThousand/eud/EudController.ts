import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eud")
export default class EudController {
  @operation({
    summary: "Get Eud",
  })
  @get()
  static getEud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eud",
  })
  @post("{id}")
  static createEud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
