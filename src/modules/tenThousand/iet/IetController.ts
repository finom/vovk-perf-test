import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iet")
export default class IetController {
  @operation({
    summary: "Get Iet",
  })
  @get()
  static getIet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iet",
  })
  @post("{id}")
  static createIet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
