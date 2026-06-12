import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kaj")
export default class KajController {
  @operation({
    summary: "Get Kaj",
  })
  @get()
  static getKaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kaj",
  })
  @post("{id}")
  static createKaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
