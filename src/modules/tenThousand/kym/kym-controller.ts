import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kym")
export default class KymController {
  @operation({
    summary: "Get Kym",
  })
  @get()
  static getKym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kym",
  })
  @post("{id}")
  static createKym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
