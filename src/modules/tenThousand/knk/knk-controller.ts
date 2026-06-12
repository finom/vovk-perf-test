import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knk")
export default class KnkController {
  @operation({
    summary: "Get Knk",
  })
  @get()
  static getKnk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knk",
  })
  @post("{id}")
  static createKnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
