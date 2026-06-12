import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eet")
export default class EetController {
  @operation({
    summary: "Get Eet",
  })
  @get()
  static getEet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eet",
  })
  @post("{id}")
  static createEet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
