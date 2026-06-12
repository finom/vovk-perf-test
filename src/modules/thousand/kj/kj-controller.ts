import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kj")
export default class KjController {
  @operation({
    summary: "Get Kj",
  })
  @get()
  static getKj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kj",
  })
  @post("{id}")
  static createKj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
