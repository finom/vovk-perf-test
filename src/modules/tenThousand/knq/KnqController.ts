import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knq")
export default class KnqController {
  @operation({
    summary: "Get Knq",
  })
  @get()
  static getKnq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knq",
  })
  @post("{id}")
  static createKnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
