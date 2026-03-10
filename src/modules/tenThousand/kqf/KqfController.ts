import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqf")
export default class KqfController {
  @operation({
    summary: "Get Kqf",
  })
  @get()
  static getKqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqf",
  })
  @post("{id}")
  static createKqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
