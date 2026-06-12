import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsv")
export default class DsvController {
  @operation({
    summary: "Get Dsv",
  })
  @get()
  static getDsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsv",
  })
  @post("{id}")
  static createDsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
