import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joz")
export default class JozController {
  @operation({
    summary: "Get Joz",
  })
  @get()
  static getJoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Joz",
  })
  @post("{id}")
  static createJoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
