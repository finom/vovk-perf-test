import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aed")
export default class AedController {
  @operation({
    summary: "Get Aed",
  })
  @get()
  static getAed = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aed",
  })
  @post("{id}")
  static createAed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
