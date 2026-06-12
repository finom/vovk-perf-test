import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krz")
export default class KrzController {
  @operation({
    summary: "Get Krz",
  })
  @get()
  static getKrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krz",
  })
  @post("{id}")
  static createKrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
