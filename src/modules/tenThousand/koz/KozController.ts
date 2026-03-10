import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koz")
export default class KozController {
  @operation({
    summary: "Get Koz",
  })
  @get()
  static getKoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Koz",
  })
  @post("{id}")
  static createKoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
