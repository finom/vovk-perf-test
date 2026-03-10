import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iss")
export default class IssController {
  @operation({
    summary: "Get Iss",
  })
  @get()
  static getIss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iss",
  })
  @post("{id}")
  static createIss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
