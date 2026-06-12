import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzo")
export default class KzoController {
  @operation({
    summary: "Get Kzo",
  })
  @get()
  static getKzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzo",
  })
  @post("{id}")
  static createKzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
