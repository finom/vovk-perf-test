import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nam")
export default class NamController {
  @operation({
    summary: "Get Nam",
  })
  @get()
  static getNam = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nam",
  })
  @post("{id}")
  static createNam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
