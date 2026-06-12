import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlh")
export default class JlhController {
  @operation({
    summary: "Get Jlh",
  })
  @get()
  static getJlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlh",
  })
  @post("{id}")
  static createJlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
