import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kck")
export default class KckController {
  @operation({
    summary: "Get Kck",
  })
  @get()
  static getKck = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kck",
  })
  @post("{id}")
  static createKck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
