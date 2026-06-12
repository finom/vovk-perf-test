import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cet")
export default class CetController {
  @operation({
    summary: "Get Cet",
  })
  @get()
  static getCet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cet",
  })
  @post("{id}")
  static createCet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
