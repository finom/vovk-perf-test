import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("at")
export default class AtController {
  @operation({
    summary: "Get At",
  })
  @get()
  static getAt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create At",
  })
  @post("{id}")
  static createAt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
