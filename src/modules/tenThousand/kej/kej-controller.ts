import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kej")
export default class KejController {
  @operation({
    summary: "Get Kej",
  })
  @get()
  static getKej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kej",
  })
  @post("{id}")
  static createKej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
