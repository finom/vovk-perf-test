import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioq")
export default class IoqController {
  @operation({
    summary: "Get Ioq",
  })
  @get()
  static getIoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ioq",
  })
  @post("{id}")
  static createIoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
